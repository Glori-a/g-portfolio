import pandas as pd

# Load the two Excel files
file1_path = '/C:/Users/BEATUS/Downloads/Telegram Desktop/inscriptions_multicritere.xlsx'
file2_path = '/C:/Users/BEATUS/Downloads/Telegram Desktop/inscriptions_repertoireapprenant.xlsx'

# Read the data
data1 = pd.read_excel(file1_path)
data2 = pd.read_excel(file2_path)

# Display the first few rows to understand the structure
data1.head(), data2.head()
