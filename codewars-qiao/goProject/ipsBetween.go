/**
 * @author : 乔磊磊
 * @date   : 2024/10/29 15:05
 * @Desc   :
 */
package main

import (
	"fmt"
	"sort"
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

func Is_valid_ip(ip string) bool {
	if strings.Count(ip, ".") != 3 {
		return false
	}
	ipArr := strings.Split(ip, ".")
	for _, v := range ipArr {
		if len(v) > 1 && strings.HasPrefix(v, "0") {
			return false
		}
		num, err := strconv.Atoi(v)
		if err != nil {
			return false
		}

		if num > 255 || num < 0 {
			return false
		}
	}
	return true
}

func ExpressionMatter(a int, b int, c int) int {
	res := []int{a * b * c, a + b + c, a*b + c, a * (b + c), a + b*c, (a + b) * c}
	sort.Ints(res)
	return res[len(res)-1]
}

func main() {
	fmt.Println(ipsBetween("10.0.0.0", "10.0.0.50"))
	fmt.Println(ipsBetween("10.0.0.0", "10.0.1.0"))
	fmt.Println(ipsBetween("20.0.0.10", "20.0.1.0"))
}
