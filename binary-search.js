const  binary_search = (arr, X)=> {
   let size_t left_idx = 0;
    let size_t right_idx = arr.length; // не включаем правую границу
    while (left_idx < right_idx) {
        size_t mid_idx = (left_idx + right_idx) / 2;
        if (arr[mid_idx] == X)
            return true;
        else if (arr[mid_idx] < X)
            left_idx = mid_idx + 1;
        else
            right_idx = mid_idx;
    }
    return false;
} 
const  solve_equation = (Y) => {
  let  double left = 1;
  let  double right = Y;
    for (let i = 0; i < 100; ++i)  {
        let mid = (left + right) / 2;
        let expr_result = mid * Math.log2(mid);
        if (expr_result < Y)
            left = mid;
        else
            right = mid;
    }
    return left;
} 
