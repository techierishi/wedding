import os
from os import path

files = [f for f in os.listdir("/media/techierishi/Data/xampp/htdocs/WeddingInvitation/images/friends") if path.isfile(f)]
for filename in files:        # Second Example
	fname = filename.rsplit('.',1)[0].replace("_", " ").title()
   	print ',{name:"%s",image:"images/friends/%s",message:" Hi %s please attend my wedding"}'% (fname,filename,fname)
