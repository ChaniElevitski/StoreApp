using App.DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace App.DAL.DataContext
{
    public partial class ShopContext : DbContext
    {
        public ShopContext() { }

        public ShopContext(DbContextOptions<ShopContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                // Use a default connection string if none is provided
                optionsBuilder.UseSqlServer("Server=DESKTOP-JOTHM14;Database=Shop;Trusted_Connection=True;TrustServerCertificate=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("products");

                entity.Property(e => e.Id).ValueGeneratedNever();
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasColumnName("name");
                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(500)
                    .HasColumnName("description");
                entity.Property(e => e.Price)
                    .IsRequired()
                    .HasColumnName("price");
                entity.Property(e => e.Img)
                    .HasMaxLength(255)
                    .HasColumnName("img");
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.HasKey(e => e.OrderId);

                entity.Property(e => e.OrderId)
                    .IsRequired()
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.PaymentStatus)
                    .HasMaxLength(10)
                    .IsFixedLength();
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();
                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .HasColumnName("email");
                entity.Property(e => e.FirstName)
                    .HasMaxLength(20)
                    .HasColumnName("firstName");
                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .HasColumnName("lastName");
                entity.Property(e => e.Password)
                    .HasMaxLength(20)
                    .HasColumnName("password");
                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(50)
                    .HasColumnName("phoneNumber");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
