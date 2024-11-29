/**
 * @author : 乔磊磊
 * @date   : 2024/11/12 11:25
 * @Desc   :
 */
package main

import (
	"fmt"
	"sort"
	"strings"
)

func PartList(arr []string) string {
	if len(arr) <= 1 {
		return ""
	}
	result := ""
	for i := 1; i < len(arr); i++ {
		a := strings.Join(arr[:i], " ")
		b := strings.Join(arr[i:], " ")
		result += fmt.Sprintf("(%s, %s)", a, b)
	}
	return result
}

func seatsInTheater(nCols int, nRows int, col int, row int) int {
	return (nCols - col + 1) * (nRows - row)
}

func InAscOrder(numbers []int) bool {
	//slices.IsSorted(numbers)
	return sort.IntsAreSorted(numbers)
}

func Solve(s string) int {
	const w = "aeiou"
	count := 0
	maxCount := 0
	for _, v := range s {
		if strings.ContainsRune(w, v) {
			count++
		} else {
			maxCount = max(maxCount, count)
			count = 0
		}
	}
	return maxCount
}

func main() {
	fmt.Println(Solve("qruyrewqhgfdsaeiret"))
	//fmt.Println(seatsInTheater(16, 11, 5, 3))
	//fmt.Println(PartList([]string{"I", "wish", "I", "hadn't", "come"}))
}
