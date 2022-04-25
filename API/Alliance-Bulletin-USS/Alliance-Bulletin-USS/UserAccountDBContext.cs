using System;
using Alliance_Bulletin_USS.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Alliance_Bulletin_USS
{
    public partial class UserAccountDBContext : DbContext
    {
        public UserAccountDBContext()
        {
        }

        public UserAccountDBContext(DbContextOptions<TechnicalBullitenDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.

                optionsBuilder.UseSqlServer(@"Data Source=LAPTOP-M90KU6VR;Initial Catalog=TechnicalBullitenDB;Integrated Security=True;MultipleActiveResultSets=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(24);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(24);

                entity.Property(e => e.UserEmail)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.Subscribed)
                    .IsRequired()
                    .HasDefaultValueSql("('FALSE')");

                entity.Property(e => e.IsDev)
                    .IsRequired()
                    .HasDefaultValueSql("('FALSE')");

                entity.Property(e => e.IsDeleted)
                    .IsRequired()
                    .HasDefaultValueSql("('FALSE')");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
