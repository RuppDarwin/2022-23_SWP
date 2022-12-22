#Part One 
file = open("./input", "r")
conent = file.read()
list_of_content = conent.split("\n")
file.close()

list_of_elf_cals = []
cals = 0
highest = 0

for i in range(len(list_of_content)):
    if list_of_content[i] != '':
        cals += int(list_of_content[i])
    else:
        list_of_elf_cals.append(cals)
        cals = 0

for i in range(len(list_of_elf_cals)):
    if list_of_elf_cals[i] > highest:
        highest = list_of_elf_cals[i]

print("Part One: " + str(highest) + "\n")

#Part Two

second_highest = 0
third_highest = 0

for i in range(len(list_of_elf_cals)):
    if list_of_elf_cals[i] > highest:
        highest = list_of_elf_cals[i]
    elif list_of_elf_cals[i] > second_highest and highest > list_of_elf_cals[i]:
        second_highest = list_of_elf_cals[i]
    elif list_of_elf_cals[i] > third_highest and highest > list_of_elf_cals[i] and highest > list_of_elf_cals[i]:
        third_highest = list_of_elf_cals[i]

print("Part Two: " + str(highest + second_highest + third_highest) + "\n")
