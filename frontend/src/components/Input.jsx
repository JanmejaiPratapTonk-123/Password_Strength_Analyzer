import { useState } from "react";

function Input() {
    const [password, setPassword] = useState("");

    let hasUppercase = false;
    let hasLowerCase = false;
    let hasDigit = false;
    let hasSpecialChar = false;

    for(const ch of password)
    {
        if(ch >= 'A' && ch <= 'Z')
            hasUppercase = true;
        else if(ch >= 'a' && ch <= 'z')
            hasLowerCase = true;
        else if(ch >= '0' && ch <= '9')
            hasDigit = true;
        else
            hasSpecialChar = true;
    }

    let score = 0;

    if(password.length >= 8) score++;
    if(hasUppercase) score++;
    if(hasLowerCase) score++;
    if(hasDigit) score++;
    if(hasSpecialChar) score++;

    let strength;

    if(password.length == 0)
        strength = "";
    else if(password.length < 8)
        strength = "Weak 🔴";
    else if(score <= 2)
        strength = "Weak 🔴";
    else if(score <= 4)
        strength = "Medium 🟡";
    else
        strength = "Strong 🟢";


    return (
        <div>
            <input 
                className="border-2 rounded text-2xl"
                
                type="password"
                placeholder="Enter Password"
    
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
    
            <div className="mt-6">
                <p>length: {password.length > 0 ? password.length : ""}</p>
                <p>Uppercase: {hasUppercase ? "Yes✅" : "No❌"}</p>
                <p>Lowercase: {hasLowerCase ? "Yes✅" : "No❌"}</p>
                <p>Digit: {hasDigit ? "Yes✅" : "No❌"}</p>
                <p>Special Character: {hasSpecialChar ? "Yes✅" : "No❌"}</p>
            </div>

            <div className="text-2xl mt-4">
                Strength: {strength}
            </div>
        </div>
    );
}
  
export default Input;