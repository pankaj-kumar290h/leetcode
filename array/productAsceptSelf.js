var productExceptSelf = function (nums) {
  const left = [];
  const right = [];
  let length = nums.length;
  left[0] = nums[0];
  for (let i = 1; i < length; i++) {
    left[i] = left[i - 1] * nums[i];
  }
  right[length - 1] = nums[length - 1];
  for (let i = length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i];
  }
  let result = [];
  result[0] = right[1];
  result[length - 1] = left[length - 2];
  for (let i = 1; i < nums.length - 1; i++) {
    let number = left[i - 1] * right[i + 1];
    result[i] = number ? number : 0;
  }
  return result;
};
nums = [-1, 1, 0, -3, 3];
productExceptSelf(nums);
