class Solution {
public:
    int reverse(int x) {
        string num = to_string(x), newNum = "";
        int j = 0;
        int start = 0;
        
        
        if(num[0] == '-'){
            newNum += "-";
            start = 1;
        }

        for(int i=num.length()-1; i>=start; i--){
            newNum += num[i];
        }

        try {
            return stoi(newNum);
        }
        catch (std::out_of_range e){
            return 0;
        }
    }
};
