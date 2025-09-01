[ohms-law-calculator](https://dirkarnez.github.io/ohms-law-calculator)
======================================================================
### TODOs
- Transformer
    - [Transformers Physics Problems - Voltage, Current & Power Calculations - Electromagnetic Induction - YouTube](https://www.youtube.com/watch?v=GJm-FOMeG4E)
    - There should be a case where output impedance (Series + parallel) is considered, so that we can get the output current of the transformer
        - [Output impedance - Wikipedia](https://en.wikipedia.org/wiki/Output_impedance)
- Maximum Power Transfer Theorem
    - [Maximum Power Transfer Theorem Using Nodal Analysis & Thevenin Equivalent Circuits - YouTube](https://www.youtube.com/watch?v=8CA6ZNXgI-Y&list=PL0o_zxa4K1BV9E-N8tSExU1djL6slnjbL&index=41)
- pull up / down
- fuse
    - > Power (Watts) / Voltage (Volts) = Current (Amps). Then, choose a fuse with a slightly higher amperage rating than the calculated current, typically around 125%
    - > The fuse's current rating must be lower than that of the cable. This is to ensure that the fuse will fail first to prevent the cable from overheating.
- physical resistor properties (effective resistence, linearity, etc. Just for fun)
    - Measured input voltage, Measured current (10k resistor A), Measured current (10k resistor B), supposed current by Ohms Law (i don't know why these resistor behave like they are 6.4 k)
      ```csv
      0	0	0	0
      3.29	0.000512	0.000511	0.000329
      4.92	0.000765	0.000764	0.000492
      ```
    - [Online Graph Maker · Plotly Chart Studio](https://chart-studio.plotly.com/create/#/)
- Earthing
 - Current divider
- AC Ohms Law
    - phase
        - [Ohms Law Calculator](https://www.rapidtables.com/calc/electric/ohms-law-calculator.html)
            - [Ohms Law](https://www.rapidtables.com/electric/ohms-law.html)
    - Power Factor (VAs vs Watts vs VARs)
    - Capacitors
        - 旁路电容 bypass
        - 滤波电容 filter
        - 去耦电容 decoupling
        - the higher the capacitance, the less ac component go to resistor
        - Tutorials
            - [旁路电容、滤波电容和去耦电容有什么区别？](https://mp.weixin.qq.com/s/dNTULzZ8kDyBgv3e7Tl67A)
  
### MathML
- [Pell's equation (BigInt and MathML demo)](https://people.igalia.com/fwang/pell-bigint-mathml/)
