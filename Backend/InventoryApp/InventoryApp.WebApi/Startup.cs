﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Serialization;
using AutoMapper;
using InventoryApp.Data.Logic;
using InventoryApp.Data.Logic.Implementations;
using InventoryApp.Data.Logic.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.Swagger;
using InventoryApp.Logic.Core.Configuration;
using InventoryApp.Logic.Core.Facades;
using InventoryApp.Logic.Core.Interfaces;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.EntityFrameworkCore;

namespace InventoryApp.WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            // Authentication
            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
                .AddCookie();

            // DbContext dependecies
            services.AddDbContext<InventoryContext>(options => options.UseSqlServer(Configuration.GetConnectionString("LocalConnection")));
            services.AddScoped<DbContext, InventoryContext>();

            // AutoMapper dependency
            services.AddAutoMapper(AutoMapperConfiguration.Configure);

            // Facades
            services.AddScoped<ICategoryFacade, CategoryFacade>();
            services.AddScoped<IProductFacade, ProductFacade>();
            services.AddScoped<IManagementFacade, ManagementFacade>();
            // Repositories
            services.AddScoped<ICategoryRepository, CategoryRepository>();
            services.AddScoped<IProductRepository, ProductRepository>();
            // Unit of work
            services.AddScoped<IUnitOfWork, UnitOfWork>();

            // Add service and create Policy with options
            services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigin",
                    builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials());
            });

            // Register the Swagger generator, defining one or more Swagger documents
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "InventoryApp", Version = "v1" });
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // Authentication
            app.UseAuthentication();

            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();

            // Cors
            app.UseCors("AllowSpecificOrigin");

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "InventoryApp");
            });

            app.UseMvc();
        }
    }
}
