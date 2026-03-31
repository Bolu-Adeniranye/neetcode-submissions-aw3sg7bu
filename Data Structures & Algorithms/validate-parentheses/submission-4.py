class Solution:
    def isValid(self, s: str) -> bool:
        values = [
            (")", "("),
            ("}", "{"),
            ("]", "["),
        ]
        parentheses = dict(values)
        print(parentheses)
        stack = []

        for c in s:
            if c not in parentheses:
                stack.append(c)
            
            else:
                if stack and stack[-1] == parentheses[c]:
                    stack.pop()
                else:
                    return False
        return not stack
