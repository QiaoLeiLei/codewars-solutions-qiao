/**
 * @author : 乔磊磊
 * @date   : 2024/11/12 11:25
 * @Desc   :
 */
package main

import (
	"fmt"
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

func main() {
	fmt.Println(PartList([]string{"I", "wish", "I", "hadn't", "come"}))
}
