[ohms-law-calculator](https://dirkarnez.github.io/ohms-law-calculator)
======================================================================
### TODOs
- Transformer
    - [Transformers Physics Problems - Voltage, Current & Power Calculations - Electromagnetic Induction - YouTube](https://www.youtube.com/watch?v=GJm-FOMeG4E)
    - [Power factor explained | Active Reactive Apparent Power correction - YouTube](https://www.youtube.com/watch?v=r97cKTLoS74)
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
 - [破除迷思！綁鋼筋接地真的有效嗎？6種常見方式誰才是無效接地｜DIY實測｜【宅水電】 - YouTube](https://www.youtube.com/watch?v=ItBXflzaNhg)
- pin-protection resistor
    - [Detect a Knock | Arduino Documentation](https://docs.arduino.cc/built-in-examples/sensors/Knock/)
        - [adc pin](./images/adc.jpg)
        - Consider Piezo internal impedance, pin input impedance, mcu adc circuitry impedance
        - `(20 / ((100*(10^6))^-1 + (1*(10^6))^-1)^-1) * 1000`
- LED
    - ```
        LG L29K-G2J1-24-Z	Osram	Standard LEDs - SMD Green, 570nm 12mcd, 2mA
        LO L29K-H2L1-24-Z	Osram	Standard LEDs - SMD Orange, 606nm 14mcd, 2mA
        LB Q39G-L2N2-35-1	Osram	Standard LEDs - SMD Blue, 470nm 45mcd, 5mA
        LS L29K-G1H2-1-Z	Osram	Standard LEDs - SMD Super Red, 630nm 13mcd, 2mA
      ```
- harmonics
    - [Understanding Harmonics in Electrical Systems - YouTube](https://www.youtube.com/shorts/rS-sWo-7c24)
    - [How Do Electrical Harmonics Work? - YouTube](https://www.youtube.com/watch?v=6HHeHTM5zYo)
    - [Harmonics Explained: Audio & Radio Electronics - YouTube](https://www.youtube.com/watch?v=q4YfZerIzAo)
    - [What are the harmonics in Power system? Type, Cause and Effect of Harmonics #electrology explained - YouTube](https://www.youtube.com/watch?v=PRNai_hTxyE)
    - [How Do Electrical Ha[33 - How do harmonics relate to power factor and displacement power factor? - YouTube](https://www.youtube.com/watch?v=oV8XpcS_lsc)
rmonics Work? - YouTube](https://www.youtube.com/watch?v=6HHeHTM5zYo)

- Power
    - power = 1 J/s
    - volt = joules per coulomb
    - current = coulomb per second
    - ```
      P = V * I
        = (J/C) * (C/s)
        = J / s
      ```
    - Switch-mode
- transmission
    - [輸電網路 - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/%E8%BC%B8%E9%9B%BB%E7%B6%B2%E8%B7%AF)
    - [The Most Confusing Part of the Power Grid - YouTube](https://www.youtube.com/watch?v=ZwkNTwWJP5k)
- Power consumption
    - [空调开一晚到底需要多少钱？#冷知识 #涨知识 - YouTube](https://www.youtube.com/watch?v=CWR74hei4W8)
    - [機電工程署 - 電力教室](https://eld.emsd.gov.hk/eic/tc/electricity-classroom/classroom08.html)
    - Household electricity
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
            - [讲得太好了！电容，去耦和退耦的注意事项 - 知乎](https://zhuanlan.zhihu.com/p/578977243)
            - [彻底搞懂：什么是耦合电容？什么是去耦电容？什么是旁路电容？什么是滤波电容？ - 德力威尔王术平 - 博客园](https://www.cnblogs.com/deliweier-wangshuping/p/16127284.html)
      - AC/DC Adapters

### Symbolic
```python
from sympy import symbols, solve, solveset
from sympy.abc import x, y, z
v, i, r = symbols('V I R')
solve(v - (i * r), i, dict=True)
```
### MathML
- [Pell's equation (BigInt and MathML demo)](https://people.igalia.com/fwang/pell-bigint-mathml/)
