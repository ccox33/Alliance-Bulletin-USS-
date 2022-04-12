using System;
using Alliance_Bulletin_USS.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Alliance_Bulletin_USS
{
    public partial class TechnicalBullitenDBContext : DbContext
    {
        public TechnicalBullitenDBContext()
        {
        }

        public TechnicalBullitenDBContext(DbContextOptions<TechnicalBullitenDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Bulletin> Bulletins { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer(@"server=USSDEVSQLSV;database=TechnicalBullitenDB;user id=sa;pwd=Alliance&*****;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Bulletin>(entity =>
            {
                entity.HasKey(e => e.BulletinId);

                entity.Property(e => e.BulletinId).HasColumnName("BulletinID");

                entity.Property(e => e.IsDeleted)
                    .IsRequired()
                    .HasDefaultValueSql("('FALSE')");

                entity.Property(e => e.Notes).HasMaxLength(500);

                entity.Property(e => e.Resolution)
                    .IsRequired()
                    .HasMaxLength(500);

                entity.Property(e => e.Software)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.Symptom)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.Topic)
                    .IsRequired()
                    .HasMaxLength(200);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
