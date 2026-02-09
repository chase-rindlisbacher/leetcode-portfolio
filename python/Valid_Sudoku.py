"""
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
"""

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        # Create a set (no duplicates allowed) for each column
        column1Set = set()
        column2Set = set()
        column3Set = set()
        column4Set = set()
        column5Set = set()
        column6Set = set()
        column7Set = set()
        column8Set = set()
        column9Set = set()
        # create a set for each 3x3 box
        box1Set = set()
        box2Set = set()
        box3Set = set()
        box4Set = set()
        box5Set = set()
        box6Set = set()
        box7Set = set()
        box8Set = set()
        box9Set = set()
        # set an increment to track position throughout the list
        rowNum = 0
        for index0 in range(0, len(board)):
            # set the row you are looping through
            row = board[index0]
            # create a set for this row
            rowSet = set()
            for index in range(0,len(row)):
                # pull the number value from the row
                num = row[index]
                # build a check to end a loop early
                if (num != "."):
                    # I will manually raise an exception if a number is already present in a set which will end the function call early
                    try:
                        if (num in rowSet):
                            raise
                        # add number to row's set
                        rowSet.add(num)
                        # The else if structure below will determine which column Set to add the number to and raise exceptions if it already exists.
                        if (index == 0):
                            if (num in column1Set):
                                raise
                            column1Set.add(num)
                        elif (index == 1):
                            if (num in column2Set):
                                raise                                    
                            column2Set.add(num)
                        elif (index == 2):
                            if (num in column3Set):
                                raise                                    
                            column3Set.add(num)
                        elif (index == 3):
                            if (num in column4Set):
                                raise                                    
                            column4Set.add(num)
                        elif (index == 4):
                            if (num in column5Set):
                                raise                                    
                            column5Set.add(num)
                        elif (index == 5):
                            if (num in column6Set):
                                raise                                    
                            column6Set.add(num)
                        elif (index == 6):
                            if (num in column7Set):
                                raise                                    
                            column7Set.add(num)
                        elif (index == 7):
                            if (num in column8Set):
                                raise                                    
                            column8Set.add(num)
                        elif (index == 8):
                            if (num in column9Set):
                                raise                                    
                            column9Set.add(num)
                        # The Else If structure below will add the number to the correct box's set and raise an exception if need be
                        if (rowNum <= 2 and index <= 2): # First 3 rows and columns
                            if (num in box1Set):
                                raise
                            box1Set.add(num)
                        elif (rowNum <= 2 and index > 2 and index <= 5): # first 3 rows and middle 3 columns
                            if (num in box2Set):
                                raise
                            box2Set.add(num)
                        elif (rowNum <= 2 and index > 5): # first 3 rows and last 3 columns
                            if (num in box3Set):
                                raise
                            box3Set.add(num)
                        elif (rowNum > 2 and rowNum <= 5 and index <= 2): # 2nd 3 rows and first 3 columns
                            if (num in box4Set):
                                raise
                            box4Set.add(num)
                        elif (rowNum > 2 and rowNum <= 5 and index > 2 and index <= 5): # 2nd 3 rows and middle 3 columns
                            if (num in box5Set):
                                raise
                            box5Set.add(num)
                        elif (rowNum > 2 and rowNum <= 5 and index > 5): # 2nd 3 rows and last 3 columns
                            if (num in box6Set):
                                raise
                            box6Set.add(num)
                        elif (rowNum > 5 and index <= 2): # last 3 rows and first 3 columns
                            if (num in box7Set):
                                raise
                            box7Set.add(num)
                        elif (rowNum > 5 and index > 2 and index <= 5): # last 3 rows and middle 3 columns
                            if (num in box8Set):
                                raise
                            box8Set.add(num)
                        elif (rowNum > 5 and index > 5): # last 3 rows and last 3 columns
                            if (num in box9Set):
                                raise
                            box9Set.add(num)
                    except:
                        # end function call early because the rules of sudoku were broken
                        return False
            # increment the row number 
            rowNum += 1
        # return true if it gets here without returning early
        return True
            
        

        