<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<script>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ohm's Law Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .form-group {
            margin-bottom: 15px;
        }
    </style>
</head>
<body>

<div id="formContainer"></div>

<script>
    class OhmsLawFormBuilder {
        constructor() {
            this.form = document.createElement('form');
            this.form.id = 'ohmsLawForm';
        }

        addInput(labelText, inputType, name) {
            const formGroup = document.createElement('div');
            formGroup.className = 'form-group';

            const label = document.createElement('label');
            label.textContent = labelText;
            label.htmlFor = name;

            const input = document.createElement('input');
            input.type = inputType;
            input.name = name;
            input.id = name;
            input.required = true;

            formGroup.appendChild(label);
            formGroup.appendChild(input);
            this.form.appendChild(formGroup);

            return this; // Enable method chaining
        }

        addSubmitButton() {
            const submitButton = document.createElement('button');
            submitButton.type = 'submit';
            submitButton.textContent = "Calculate";
            this.form.appendChild(submitButton);

            return this; // Enable method chaining
        }

        build() {
            return this.form;
        }
    }

    // Create the form using the builder
    const formBuilder = new OhmsLawFormBuilder();
    const form = formBuilder
        .addFormula(
            formBuilder.addOutput("Voltage (V)", "number", "voltage"),
            formBuilder.multiply(            
                formBuilder.addInput("Current (I)", "number", "current"),
                formBuilder.addInput("Resistance (R)", "number", "resistance")
            )
        )
        
        .onSubmit(e => {
          event.preventDefault();
          const voltage = parseFloat(event.target.voltage.value);
          const current = parseFloat(event.target.current.value);
          const resistance = parseFloat(event.target.resistance.value);

          // Simple validation and calculation
          if (isNaN(voltage) && !isNaN(current) && !isNaN(resistance)) {
              const calculatedVoltage = current * resistance;
              alert(`Calculated Voltage: ${calculatedVoltage} V`);
          } else if (isNaN(current) && !isNaN(voltage) && !isNaN(resistance)) {
              const calculatedCurrent = voltage / resistance;
              alert(`Calculated Current: ${calculatedCurrent} A`);
          } else if (isNaN(resistance) && !isNaN(voltage) && !isNaN(current)) {
              const calculatedResistance = voltage / current;
              alert(`Calculated Resistance: ${calculatedResistance} Ω`);
          } else {
              alert('Please provide exactly two values to calculate the third.');
          }
        })
        .build();

    // Append the form to the container
    document.getElementById('formContainer').appendChild(form);
</script>

</body>
</html>
</script>

</body>
</html>


