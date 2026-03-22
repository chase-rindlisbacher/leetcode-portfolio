# Codeshare Problem with Altitude AI (Interviewer was Brandon)
# Given an integer N that represents an N x N chessboard, a start position (start_x, start_y), and a target position (target_x, target_y),
# return the minimum number of moves required for a knight to reach the target from the start.
# A knight moves in an L-shape: two squares in one direction, one square perpendicular.
# Return -1 if the target is unreachable.

def knightToNewSpace(n, start_pos, target_pos, moves = 0, minMoves = 0, lastPos = None, visited = {}):
    start_x,start_y = start_pos
    position_string = f'{start_x},{start_y}'
    visited[position_string] = 1
    target_x,target_y = target_pos
    if(start_x == target_x and start_y == target_y):
        if (minMoves == 0):
            minMoves = moves
        if (moves <= minMoves):
            return moves
        else:
            return minMoves
    if (n <= 2):
        return -1
    max_range = n - 1
    knights_moves = [[1,2],[1,-2],[-1,2],[-1,-2],[2,1],[2,-1],[-2,1],[-2,-1]]
    numMoves = 0
    for x,y in knights_moves: # first, look at ever possibility from where you are
        if (start_x + x > max_range or start_y + y > max_range or start_x + x < 0 or start_y + y < 0):
            continue
        else:
            if (start_x + x == target_x and start_y + y == target_y):
                moves += 1
                if (minMoves == 0):
                    minMoves = moves
                if (moves < minMoves):
                    minMoves = moves
                return minMoves
    for x,y in knights_moves:
        if (start_x + x > max_range or start_y + y > max_range or start_x + x < 0 or start_y + y < 0):
            continue
        else:
            new_start_pos = (start_x + x, start_y + y)
            if (new_start_pos == lastPos):
                continue
            if new_start_pos in visited:
                continue
            numMoves = knightToNewSpace(n, new_start_pos, target_pos, moves + 1, minMoves, start_pos,visited)
            if (numMoves == 1):
                return numMoves
                    
    return numMoves

  
test_cases = [
    # (n, start_pos, target_pos)
    (8,  (0,0), (0,0)),      # same square (0 moves)
    (1,  (0,0), (0,0)),      # tiny board edge case
    (8,  (0,0), (2,1)),      # one move
    (8,  (4,4), (5,6)),      # one move (center)
    (8,  (0,0), (3,4)),      # two moves
    (4,  (0,0), (3,3)),      # small board two moves
    (8,  (0,0), (7,7)),      # long path (corner->corner)
    (2,  (0,0), (1,1)),      # unreachable on 2x2
    (3,  (0,0), (2,2)),      # small board complex
    (10, (0,0), (9,9)),      # larger board
    (5,  (2,2), (0,0)),      # center to corner
    (8,  (0,0), (8,8)),      # invalid target (out of bounds)
    (8,  (7,0), (0,7)),      # opposite edges
]

for n, start, target in test_cases:
    try:
        res = knightToNewSpace(n, start, target)
    except Exception as e:
        res = f"error: {e}"
    print(f"n={n}, start={start}, target={target} -> {res}")