from PIL import Image

input_path = "/Users/blessing/.gemini/antigravity/brain/41aca2db-a96a-4564-85e3-8000cbff7972/tug_of_war_ppe_1769428857605.png"
output_path = "public/assets/tug-of-war-cropped.png"

try:
    img = Image.open(input_path)
    width, height = img.size
    
    # Crop 10% from each side to remove the border/Kodak text
    # The border is usually around 5-8%, so 10% is safe without losing too much content
    crop_pixels_w = int(width * 0.08)
    crop_pixels_h = int(height * 0.08)
    
    left = crop_pixels_w
    top = crop_pixels_h
    right = width - crop_pixels_w
    bottom = height - crop_pixels_h
    
    cropped_img = img.crop((left, top, right, bottom))
    cropped_img.save(output_path)
    print(f"Successfully cropped and saved to {output_path}")

except Exception as e:
    print(f"Error: {e}")
