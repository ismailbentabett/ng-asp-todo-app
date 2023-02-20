
using Microsoft.EntityFrameworkCore;
using server.models;

namespace server.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Todo> Todos { get; set; }
    }
}