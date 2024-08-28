    using Microsoft.EntityFrameworkCore;
    using Backend.Models;

    namespace Backend.Data
    {
        public class ApplicationDbContext : DbContext
        {
            public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
                : base(options)
            {
            }

            public DbSet<Product> Products { get; set; }
            public DbSet<User> Users { get; set; }

            protected override void OnModelCreating(ModelBuilder modelBuilder)
            {
                base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>()
            .Property(u => u.AuthKey)
            .HasColumnName("auth_key");

            modelBuilder.Entity<User>()
            .Property(u => u.Id)
            .HasColumnName("id");

            modelBuilder.Entity<User>()
            .Property(u => u.Username)
            .HasColumnName("username");

            modelBuilder.Entity<User>()
            .Property(u => u.Email)
            .HasColumnName("email");

            modelBuilder.Entity<User>()
            .Property(u => u.PasswordHash)
            .HasColumnName("password_hash");

            modelBuilder.Entity<User>()
            .Property(u => u.Gender)
            .HasColumnName("gender");

            modelBuilder.Entity<User>()
            .Property(u => u.AuthKey)
            .HasColumnName("auth_key");

            modelBuilder.Entity<User>()
                .Property(u => u.CreatedAt)
                .HasColumnName("created_at");


            // Configure precision and scale for the Price property
            modelBuilder.Entity<Product>()
                    .Property(p => p.Price)
                    .HasColumnType("decimal(18,2)"); // Precision 18, Scale 2
            }

        }
    }
