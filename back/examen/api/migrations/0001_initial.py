# Generated by Django 4.1.3 on 2022-11-10 01:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Libros',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('genero', models.CharField(max_length=100)),
                ('rating', models.IntegerField()),
                ('autor', models.CharField(max_length=100)),
            ],
        ),
    ]
