import asyncio
from pyppeteer import launch
import tkinter as tk
import keyboard  # using module keyboard
import threading
import time


async def runScript(inBg=False):
    try:
        browser = await launch({
            "headless": inBg
        })
        page = await browser.newPage()
        await page.goto('https://popcat.click/')
        while(True):
            await page.click('#app')
            print('click')

            if stop():
                break
            # root.protocol("WM_DELETE_WINDOW", on_quit)

        #     if keyboard.is_pressed('q'):  # if key 'q' is pressed
        #         print('You Pressed Key!')
        #         break  # finishing the loop
        await browser.close()
    except print(0):
        pass


def key_pressed(event):
    if event.char == 'Q':
        print('I should Quit')
        # x.ca


class Application(tk.Frame):
    def __init__(self, gui=None):
        super().__init__(gui)
        self.gui = gui
        self.gui.geometry('500x200')
        self.gui.configure(bg='#333')
        self.pack()
        self.create_widgets()

    def create_widgets(self):

        self.intro = tk.Label(text='Welcome to catpop.click script! Only for Macedonians :)',
                              foreground="White",  # Set the text color to white
                              background="#333",  # Set the background color to black
                              width=100
                              )
        self.intro.pack()

        btn1 = tk.Button(self.gui, text="Run in background",
                         command=self.runScriptInBg, bg='#333', fg='White')

        btn2 = tk.Button(self.gui, text="Run in foreground",
                         command=self.runScriptInFg, bg='#333', fg='White')

        quit = tk.Button(self.gui, text="QUIT",
                         command=self.gui.destroy, bg='#333', fg='White')

        btn1.pack(fill=tk.X, ipady=5)
        btn2.pack(fill=tk.X, ipady=5)
        quit.pack(fill=tk.X, ipady=5)

    def runScriptInBg(self):
        asyncio.run(runScript(False))

    def runScriptInFg(self):
        asyncio.get_event_loop().run_until_complete(runScript(False))


root = tk.Tk()
root.title('Catpop.click script')
root.bind("<Key>", key_pressed)
app = Application(gui=root)
app.mainloop()
