import os

def generate_carousel_item(file_name, index):
    return f"""
    <div type="button" class="carousel-item{' active' if index == 0 else ''}">
        <img src="{file_name}" class="d-block w-100">
    </div>"""

def generate_carousel_indicator(index):
    return f"""
<button aria-label="Slide {index}" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="{index}"{' class="active"' if index == 0 else ''}></button>"""

def add_new_items(folder_path):
    new_items = []
    indicators = []
    completed = []

    index = 0

    for file_name in os.listdir(folder_path):
        file_path = os.path.join(folder_path, file_name)
        if os.path.isfile(file_path):
            new_items.append(generate_carousel_item(file_path, index))
            indicators.append(generate_carousel_indicator(index))
            index += 1

    for indicador in indicators:
        completed.append(indicador)
    for item in new_items:
        completed.append(item)
    
    with open("certificados.html", "w") as indicators_file:
        indicators_file.write(" ".join(completed))

if __name__ == "__main__":
    folder_path = "./assets/imgs/certificados"
    add_new_items(folder_path)