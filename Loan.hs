import Text.Printf

calculateEMI :: Float -> Float -> Float -> Float
calculateEMI principal rate months =
    let r = rate / (12 * 100)
        emi = (principal * r * (1 + r) ** months) / ((1 + r) ** months - 1)
    in emi

checkEligibility :: Float -> Float -> Bool
checkEligibility salary emi =
    emi <= salary * 0.4

main :: IO ()
main = do
    putStrLn "Loan EMI Calculator"

    putStrLn "Enter Loan Amount:"
    loan <- readLn

    putStrLn "Enter Interest Rate:"
    rate <- readLn

    putStrLn "Enter Months:"
    months <- readLn

    putStrLn "Enter Salary:"
    salary <- readLn

    let emi = calculateEMI loan rate months

    printf "EMI: %.2f\n" emi

    if checkEligibility salary emi
        then putStrLn "Loan Approved"
        else putStrLn "Loan Not Approved"
