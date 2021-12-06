using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.Extensions.DependencyInjection;

namespace DesignYourself.ViewModels.Mapper
{
    public static class RegisterMapperProfilesExtesion
    {
        public static void RegisterMapperProfiles(this IServiceCollection services)
        {
            var configuration = new MapperConfiguration(c =>
            {
                c.AddProfile<MapperProfiler>();
            });

            services.AddTransient(s => configuration.CreateMapper());
        }
    }
}
