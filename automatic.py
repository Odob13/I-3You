import os

folder_path = 'demo/gallery' # Ruta de la carpeta que contiene los archivos
output_file = 'output.txt' # Nombre del archivo de texto de salida

with open(output_file, 'w') as f:
    for filename in os.listdir(folder_path):
        file_path = os.path.join(folder_path, filename)
        if os.path.isfile(file_path):
            file_path = file_path.replace('\\', '/') # Reemplazar barras invertidas con barras normales
            f.write('{\n')
            f.write('    title: "",\n')
            f.write('    description: "",\n')
            f.write(f'    src: "{file_path}",\n')
            f.write('    like: false\n')
            f.write('},\n')