# Generated by Django 4.2.5 on 2023-10-22 14:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('main', '0002_auto_20231010_0527'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='implement',
            name='borrow_date',
        ),
        migrations.RemoveField(
            model_name='implement',
            name='borrowed_by',
        ),
        migrations.RemoveField(
            model_name='implement',
            name='return_date',
        ),
        migrations.AlterField(
            model_name='implement',
            name='description',
            field=models.TextField(blank=True),
        ),
        migrations.CreateModel(
            name='Reservation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('borrow_date', models.DateTimeField(auto_now_add=True)),
                ('return_date', models.DateTimeField(null=True)),
                ('return_state_description', models.TextField(blank=True)),
                ('return_label', models.CharField(choices=[('DAMAGED', 'Dañado'), ('LOST', 'Perdido'), ('WORKING', 'Funcionando'), ('PRESTABLE', 'Prestable')], max_length=20, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('status', models.CharField(choices=[('RESERVED', 'Reservado'), ('BORROWED', 'Prestado'), ('RETURNED', 'Devuelto')], default='RESERVED', max_length=20)),
                ('borrowed_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
                ('implement', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.implement')),
            ],
        ),
    ]
