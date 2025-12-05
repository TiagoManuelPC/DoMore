using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence;

public class DoMoreDbContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Activity> Activities { get; set; }
}
