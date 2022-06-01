class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        vector<int> dp;
        
        for (int n : nums) {
            auto iter = lower_bound(dp.begin(), dp.end(), n);
            if (iter == dp.end()) {
                dp.push_back(n);
            } else {
                *iter = n;
            }
        }
        return dp.size();
    }
};