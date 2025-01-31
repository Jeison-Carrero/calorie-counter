# 📟 Calculadora de Calorías

Este proyecto es una pagina web desarrollada con Angular, que permite calcular la cantidad de calorías diarias recomendadas para una persona según su peso, altura y edad. El usuario puede ingresar los datos en el sistema métrico decimal o imperial, y la aplicación realiza la conversión si es necesario.

## Fórmula base para el cálculo

Calorías = (10 × Peso + 6.25 × Altura - 10 × Edad + 5) × Factor

Donde el Factor se determina según el peso (en libras):

Menos de 165 lb → 1.6

Entre 165 lb y 200 lb → 1.4

Entre 201 lb y 220 lb → 1.2

Más de 220 lb → 1.0


## Funcionalidades

✔️ Selección entre sistema métrico decimal (kg/cm) o imperial (lb/in).

✔️ Validaciones estrictas para asegurar datos correctos:

  Solo valores numéricos.
  
  No se permiten valores negativos.
  
  Peso: Entre 40.50 kg - 300 kg.
  
  Altura: Entre 1.40 m - 2.25 m.
  
  Edad: Entre 16 - 105 años.

✔️ Cálculo en tiempo real al modificar los valores ingresados.


## Tecnologías utilizadas

🔹 Angular.

🔹 HTML5, CSS3, TypeScript.

🔹 Tailwindcss.

## Instalación

Para desplegar el proyecto en local, sigue los siguientes pasos:

1. Clona este repositorio:
   
         git clone https://github.com/Jeison-Carrero/calorie-counter.git
   
2. Importa el proyecto en tu IDE favorito (Visual studio recomendado)
 
3. Abre una terminal y ejecuta el siguiente comando para descargar las dependencias:
   
        npm install
   
3. Luego ejecuta este comando para ejecutar el proyecto:
   
        ng serve

4. copia y pega esta URL en tu navegador favorito para ver la interfaz de usuario:

        http://localhost:4200/   
