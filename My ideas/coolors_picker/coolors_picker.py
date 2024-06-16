from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.action_chains import ActionChains
import time

# Setup the Chrome driver (make sure you have the right path to your driver)
service = Service('../../From-School/Vue/new_vue_project/src/assets/chrome-win64/chrome-win64/chrome.exe')
driver = webdriver.Chrome(service=service)

# Navigate to Coolors.co
driver.get('https://coolors.co/generate')

# Allow time for the page to load
time.sleep(5)

# Find the 'Generate' button and click it
generate_button = driver.find_element(By.CLASS_NAME, 'generator-menu-bar__button')
generate_button.click()

# Allow time for the new palette to generate
time.sleep(5)

# Extract the color palette
colors = driver.find_elements(By.CLASS_NAME, 'color')
palette = [color.get_attribute('style').split(': ')[1].strip(';') for color in colors]

# Print the colors
print("Generated Color Palette:")
for color in palette:
    print(color)

# Close the browser
driver.quit()