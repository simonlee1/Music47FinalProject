import socket
import time

class MyClass:
    def __init__(self):
        # sets up socket to quacktrip for receiving data from pd
        self.r = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.r.bind(('127.0.0.1', 3005))
        self.r.listen(1)
        self.s = self.connect()
        self.con, address = self.r.accept()
        print("server is running")


    # connects a socket to quacktrip for sending data from python to pd
    def connect(self):
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.connect(('127.0.0.1', 3006))
        s.send(bytes("0;", "utf-8"))
        return s


    # disconnects socket 
    def disconnect(self):
        self.s.send(bytes("1;", "utf-8"))


    # get readouts
    # quackpanel readouts
    def get_readouts(self):
        self.s.send(bytes("5;", "utf-8"))
        data = str(self.con.recv(10000))[2:-4]
        values = data.split(' ')
        result = {'dropouts' : values[0],
                    'calling' : values[1],
                    'foundsrvr' : values[2],
                    'connected' : values[3],
                    'pcktsin' : values[4],
                    'fill0' : values[5],
                    'fill1' : values[6],
                    'outsr' : values[7],
                    'outchnl' : values[8],
                    'outblcksz' : values[9],
                    'outkbits' : values[10],
                    'insr' : values[11],
                    'inchnl' : values[12],
                    'inblcksz' : values[13],
                    'inkbits' : values[14]}
        return result
        

    def send_values(self, action, d, dict):
        for k,v in dict.items():
            sendstring = f"{action} {d[k]} {v};"
            self.s.send(bytes(sendstring, "utf-8"))


    def set_inpanel(self, dict):
        d = {'level' : 0, 'mute' : 1, 'test' : 2, 'im' : 3, 'imdelay' : 4}
        self.send_values(2, d, dict)


    def set_quackpanel(self, dict):
        d = {'state' : 0, 'chnls' : 1, 'blcksz' : 2, 'dbl' : 3, 'id' : 4, 'cllnm' : 5, 'srvrnm' : 6, 'reset' : 7}
        self.send_values(3, d, dict)


    def set_outpanel(self, dict):
        d = {'level' : 0, 'mute' : 1, 'bal' : 2, 'reset' : 3, 'mono' : 4}
        self.send_values(4, d, dict)


server = MyClass()

server.get_readouts()
server.disconnect()
