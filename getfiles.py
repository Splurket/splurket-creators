import os
find = """00c292
    """ # the string which is to be replaced with
replaceWith = """52b36c
    """
 # found string which is to be replaced with
for file in os.listdir("."):
    if file.endswith(".html"):
        with open(file) as f:
            s = f.read()
            s = s.replace(find, replaceWith)
            with open(file, "w") as f:
                f.write(s)
                print(os.path.join(".", file,))





