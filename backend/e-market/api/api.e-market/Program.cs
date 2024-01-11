using api.e_market.Core.Exceptions;
using api.e_market.Core.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.Load("domain.e-market"));

//Injections
builder.Services.AddCoreInjections();
builder.Services.AddRepositoryInjections();

//Trust
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        builder =>
        {
            builder.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
        });
});

//Exceptions
builder.Services.AddMvc(options =>
{
    options.EnableEndpointRouting = false;
    options.Filters.Add(typeof(CustomExceptions));
});

//Database
builder.Services.AddDatabaseConf(builder.Configuration);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.DocExpansion(Swashbuckle.AspNetCore.SwaggerUI.DocExpansion.None);
    });
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.UseCors();
app.Run();
