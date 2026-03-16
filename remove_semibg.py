from PIL import Image
import os

def remove_white_background(image_path, output_path, threshold=240):
    try:
        img = Image.open(image_path).convert("RGBA")
        datas = img.getdata()

        new_data = []
        for item in datas:
            # Check if pixel is close to white
            if item[0] > threshold and item[1] > threshold and item[2] > threshold:
                new_data.append((255, 255, 255, 0))  # Transparent
            else:
                new_data.append(item)

        img.putdata(new_data)
        img.save(output_path, "PNG")
        print(f"Processed: {image_path} -> {output_path}")
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

# Process assets
assets = [
    "public/assets/stitch-pattern.png",
    "public/assets/stitch-foot.png"
]

for asset in assets:
    if os.path.exists(asset):
        remove_white_background(asset, asset)
    else:
        print(f"File not found: {asset}")
