from django.db import models

# Create your models here.


class Postulante_oferta(models.Model):

    FRONT = 'FrontEnd'
    BACK = 'BackEnd'
    JUNIOR = 'Junior'
    SEMI = 'Semisenior'
    SENIOR = 'Senior'

    PERFIL_CHOICES = (
        (FRONT, 'Horror'),
        (BACK, 'Comedy'),
    )

    NIVEL_CHOICES = (
        (JUNIOR,'Junior'),
        (SEMI,'Semisenior'),
        (SENIOR,'Senior'),
    )

    campo = models.CharField(max_length=100)
    nombre = models.CharField(max_length=100)
    dni = models.CharField(max_length=100)
    perfil = models.CharField(max_length=100, choices=PERFIL_CHOICES)
    nivel = models.CharField(max_length=100, choices=NIVEL_CHOICES)
    fech_nacimiento = models.DateField(default="2000-06-22")

    def __str__(self):
        return self.nombre
