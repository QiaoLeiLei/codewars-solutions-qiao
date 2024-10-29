/**
 * @author : 乔磊磊
 * @date   : 2024/10/29 15:05
 * @Desc   :
 */
package main

import (
	"fmt"
	"strconv"
	"strings"
)

func ipsBetween(start, end string) int {
	starNum := 0
	endNum := 0
	startArr := strings.Split(start, ".")
	endArr := strings.Split(end, ".")

	for index, _ := range startArr {
		if startArr[index] != endArr[index] {
			starNumSub, _ := strconv.Atoi(startArr[index])
			endNumSub, _ := strconv.Atoi(endArr[index])
			starNumSub = starNumSub << (24 - (8 * index))
			endNumSub = endNumSub << (24 - (8 * index))
			starNum += starNumSub
			endNum += endNumSub
		}
	}

	return endNum - starNum
}

func main() {
	fmt.Println(ipsBetween("10.0.0.0", "10.0.0.50"))
	fmt.Println(ipsBetween("10.0.0.0", "10.0.1.0"))
	fmt.Println(ipsBetween("20.0.0.10", "20.0.1.0"))
}
