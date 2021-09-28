import turicreate
import sys

def removeCol (sf):
    ColsToRemove = ["Transcript", "Census Gene", "Histology Subtype 1", 
    "Histology Subtype 2", "Pubmed Id", "CGP Study", "Somatic Status", "Sample Type"]
    for col in ColsToRemove:
        try:
            sf.remove_column(col, inplace = True)
        except KeyError as e:
            print ("Error", e)
    return sf

i = 1
FileDone = False

while not FileDone:
    try:
        sf = turicreate.SFrame(str(i) + ".csv")
    except OSError:
        FileDone = True
        break
    else:
        sf = removeCol(sf)
        FileName = sf['Gene Name'][0] + ".csv"
        sf.save(FileName, format='csv')
    i+=1