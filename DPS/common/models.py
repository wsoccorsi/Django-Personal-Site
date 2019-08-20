from django.db import models

# Create your models here.
class Tech(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=256)
    profecieny = models.IntegerField(null=True, blank=True)


    class Meta:
        db_table = 'teck_stack'

    def __str__(self):
        return self.name
