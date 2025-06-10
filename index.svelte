<script>
    let currentValue = 1; // Default value for resistance (R)

    // Function to update the value
    function updateValue(event) {
        currentValue = event.target.value;
    }
</script>

<style>
    .slider {
        width: 100%;
        margin: 20px 0;
    }
</style>

<div>
    <h2>Ohm's Law</h2>
    <p>
        Adjust the resistance (R):
        <input type="range" min="1" max="100" value="{currentValue}" class="slider" on:input="{updateValue}">
        <span>{currentValue} Ohms</span>
    </p>
    
    <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mi>V</mi>
        <mo>=</mo>
        <mi>I</mi>
        <mo>&#8290;</mo>
        <mi>R</mi>
        <mo>,</mo>
        <mo> </mo>
        <mi>where</mi>
        <mo> </mo>
        <mi>R</mi>
        <mo>=</mo>
        <mn>{currentValue}</mn>
    </math>
</div>
