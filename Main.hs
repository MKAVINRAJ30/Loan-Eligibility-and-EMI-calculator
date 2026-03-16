{-# LANGUAGE OverloadedStrings #-}

import Web.Scotty
import qualified Data.Text.Lazy as TL

calculateEMI :: Double -> Double -> Double -> Double
calculateEMI p r n =
  let rate = r / (12 * 100)
  in (p * rate * (1 + rate) ** n) / ((1 + rate) ** n - 1)

checkEligibility salary emi =
  emi <= salary * 0.4

main :: IO ()
main = scotty 3000 $ do

  get "/" $ do
    file "index.html"

  get "/calculate" $ do

    loan <- param "loan"
    rate <- param "rate"
    months <- param "months"
    salary <- param "salary"

    let emi = calculateEMI loan rate months

    let status =
          if checkEligibility salary emi
          then "Loan Approved"
          else "Loan Not Approved"

    html (TL.pack ("<h2>EMI: " ++ show emi ++ "</h2><h3>" ++ status ++ "</h3>"))
