function reverseString() {
            let inputText = document.getElementById("inputText").value;
            let reversed = inputText.split('').reverse().join('');
            document.getElementById("result").innerText = `Результат обертання рядка: ${reversed}`;
        }

        function checkPalindrome() {
            let inputText = document.getElementById("inputText").value;
            let original = inputText.toLowerCase().replace(/[\W_]/g, '');
            let reversed = original.split('').reverse().join('');
            let isPalindrome = (original === reversed) ? "Так" : "Ні";
            document.getElementById("result").innerText = `Чи є паліндромом: ${isPalindrome}`;
        }

        function findGCD() {
            let num1 = parseInt(document.getElementById("num1").value);
            let num2 = parseInt(document.getElementById("num2").value);
            let gcd = calculateGCD(num1, num2);
            document.getElementById("result").innerText = `НСД чисел ${num1} і ${num2}: ${gcd}`;
        }

        function calculateGCD(a, b) {
            if (b === 0) {
                return a;
            } else {
                return calculateGCD(b, a % b);
            }
        }