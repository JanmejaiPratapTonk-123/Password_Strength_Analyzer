#include <iostream>
#include <algorithm> // for min
#include <cctype> // for isupper, islower, isdigit
#include <cmath> // for log2()
#include <iomanip> // for 2 decimal places
using namespace std;

void strengthCheck(string& strength, int percentage)
{
    int bars = percentage / 10;

    bars = min(bars, 10);

    for(int i = 1; i <= bars; i++)
    {
        strength[i] = '#';
    }
}

int main()
{
    string pass;
    cout << "Enter password: ";
    getline(cin, pass);
    
    if(pass.empty())
    {
        cout<<"No password entered\n";
        return 0;
    }


    int score = 0;
    string strength = "[----------]";

    bool hasUpper = false;
    bool hasLower = false;
    bool hasDigit = false;
    bool hasSymbol = false;

    if(pass.length() >= 8) score++;

    for(char c : pass)
    {
        if(isupper(c)) hasUpper = true;
        else if(islower(c)) hasLower = true;
        else if(isdigit(c)) hasDigit = true;
        else hasSymbol = true;
    }

    if(hasUpper) score++;
    if(hasLower) score++;
    if(hasDigit) score++;
    if(hasSymbol) score++;


    // Check Strength
    string level;

    if(score <= 2) 
        level = "Weak";
    else if(score <= 4) 
        level = "Medium";
    else 
        level = "Strong";


    // Entropy
    int pool = 0;

    if(hasLower) pool += 26;
    if(hasUpper) pool += 26;
    if(hasDigit) pool += 10;
    if(hasSymbol) pool += 32;

    double entropy;
    if(pool == 0) // to avoid log2(0)
        entropy = 0;
    else
        entropy = pass.length() * log2(pool);


    // Crack Time Estimation

    // double combinations = pow(pool, pass.length());
    // double seconds = combinations / guessesPerSec;
    
    const double guessesPerSec = 1e9;

    double logCombinations = pass.length() * log(pool);
    double logSeconds = logCombinations - log(guessesPerSec);

    double seconds;
    if(logSeconds > 700) // to avoid overflow in exp()
        seconds = INFINITY;
    else
        seconds = exp(logSeconds);
    double minutes = seconds / 60;
    double hours = minutes / 60;
    double days = hours / 24;
    double years = days / 365;


    // Strength Bar and Percentage
    int percentage = (score * 100) / 5;
    strengthCheck(strength, percentage);


    // Print Strength, Strength bar and Percentage
    cout << "Password Strength: " << level << endl;
    cout << "Strength: " << strength << " " << percentage << "%" << endl;


    // Print Suggestions
    if(score<5)
    {
        cout << "Suggestions:" << endl;
        if(!hasUpper) cout<<"Add an uppercase letter" << endl;
        if(!hasLower) cout<<"Add a lowercase letter" << endl;
        if(!hasDigit) cout<<"Add a digit" << endl;
        if(pass.length()<8) cout<<"Make length >= 8" << endl;
        if(!hasSymbol) cout<<"Add a special character" << endl;
    }
    else
        cout<<"All criteria satisfied" << endl;


    // Print Entropy
    cout << "Entropy: " << fixed << setprecision(2) << entropy << " bits" << endl;


    // Time to Crack
    cout << "Estimated Crack Time: ";

    cout << fixed << setprecision(2);
    if(seconds == INFINITY)
        cout << "practically infinite" << endl;
    else if(seconds < 60)
        cout << seconds << " seconds" << endl;
    else if(minutes < 60)
        cout << minutes << " minutes" << endl;
    else if(hours < 24)
        cout << hours << " hours" << endl;
    else if(days < 365)
        cout << days << " days" << endl;
    else
        cout << years << " years" << endl;

    return 0;
}