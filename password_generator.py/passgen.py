import random 
import string

'''ChatGPT generated code:
Generates a random string of characters and digits ( password ).'''
def gen_pass(len=12, w_digits=True, w_special=True):

    letters = string.ascii_letters
    digits = string.digits if w_digits else ''
    special_chars = string.punctuation if w_special else ''

    all_chars = letters + digits + special_chars
    len = max(len, 16)

    password = ''.join(random.choice(all_chars) for _ in range(len))
    return password

password = gen_pass()
print(password)