import asyncio
from playwright.async_api import async_playwright  # type: ignore 

async def main():
    async with async_playwright() as p:
        # Launch browser
        browser = await p.chromium.launch(headless=False)  # Set headless to False to see the browser in action
        page = await browser.new_page()

        # Navigate to Coolors.co
        await page.goto('https://coolors.co/generate')

        # Allow time for the page to load
        await page.wait_for_timeout(5000)

        # Press the spacebar to generate a new palette
        try:
            await page.keyboard.press('Space')
        except Exception as e:
            print(f"Error pressing spacebar: {e}")
            await browser.close()
            return

        # Allow time for the new palette to generate
        await page.wait_for_timeout(5000)

        # Extract the color palette
        try:
            colors = await page.query_selector_all('.color')
            if colors:
                palette = [await color.inner_text() for color in colors]
                color_names = [color.split("\n")[1] for color in palette]

                # Save the color names to a file
                with open('color_names.txt', 'w') as file:
                    file.write("Generated Color Names:\n")
                    for name in color_names:
                        file.write(f"{name}\n")

                print("Color names saved to color_names.txt")
            else:
                print("Color elements not found.")
        except Exception as e:
            print(f"Error extracting color palette: {e}")

        # Close the browser
        await browser.close()

# Run the script
asyncio.run(main())