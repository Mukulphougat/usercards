def customBubbleSort(array):
    n = len(array)
    for i in range(n):
        for j in range(0, n - i - 1):
            if array[j] > array[j + 1]:
                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp


arr1 = [64, 34, 25, 12, 22, 11, 90]
print("Unsorted Array:")
print(arr1)
customBubbleSort(arr1)
print("Sorted Array:")
print(arr1)
