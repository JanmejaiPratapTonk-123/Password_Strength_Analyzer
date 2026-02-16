# Password Strength Analyzer (C++)

A smart password analysis tool built in C++ that evaluates password strength using multiple security metrics such as character diversity, entropy calculation, strength score, and estimated crack time.

--------------------------------------------------

FEATURES

- Detects:
  - Uppercase letters
  - Lowercase letters
  - Digits
  - Special characters
  - Minimum length requirement

- Strength classification:
  - Very Weak
  - Weak
  - Medium
  - Strong

- Visual strength bar indicator
- Security suggestions for improvement
- Entropy calculation (bits)
- Estimated brute-force crack time
- Overflow-safe crack time computation using logarithmic math

--------------------------------------------------

CONCEPTS USED

- Character classification (cctype)
- Entropy calculation
- Logarithmic math to prevent overflow
- Time complexity reasoning
- Defensive programming
- Input validation
- Secure password theory

--------------------------------------------------

TECH STACK

Language: C++
Compiler: g++ / MinGW

Libraries Used:
- iostream
- cmath
- algorithm
- iomanip
- cctype

--------------------------------------------------

STRENGTH CALCULATION LOGIC

Score is based on 5 criteria:

Length >= 8        +1
Uppercase letter   +1
Lowercase letter   +1
Digit              +1
Symbol             +1

Total score determines strength level.

--------------------------------------------------

ENTROPY FORMULA

Entropy = Length × log2(Character Pool Size)

Higher entropy means stronger password.

--------------------------------------------------

CRACK TIME ESTIMATION

time = combinations / guesses_per_second

To prevent overflow:

log(seconds) = log(combinations) − log(guesses_per_second)

--------------------------------------------------

HOW TO RUN

Compile:
g++ password.cpp -o password

Run:
./password

--------------------------------------------------

EXAMPLE OUTPUT

Enter password: Abc@1234

Password Strength: Medium
Strength: [######----] 60%

Suggestions:
Add more special characters

Entropy: 45.82 bits
Estimated Crack Time: 2.31 years

--------------------------------------------------

FUTURE IMPROVEMENTS

- GUI version (Qt)
- Password generator mode
- Dictionary attack simulation
- Save results to file
- Real-time typing analysis
- Dark mode interface

--------------------------------------------------

AUTHOR

Janmejai Pratap Tonk

--------------------------------------------------

If you like this project, give it a star on GitHub.
