library(circlize)
library(tidyverse)

#example 1 -------------------------------------------------------------
n = 100
df <- data.frame(
    fa = sample(letters[1:9], n, replace = T), 
    x = rnorm(n), 
    y = rnorm(n)
)
lty = c("l", "o", "h", "h", "s", "l", "l", "o", "s", "l")
names(lty) = letters[1:9]
bl <- rep(c("bottom", "top"), each = c(8, 1))
names(bl) <- letters[1:9]

circos.par(start.degree = 0, track.height = 0.5)
circos.initialize(factors = df$fa, x = df$x)
circos.track(factors = df$fa, x = df$x, y = df$y, 
             panel.fun = function(x, y){
                 od = order(x)
                 circos.lines(x = x[od],
                              y = y[od], 
                              area = ifelse(get.current.sector.index() %in% letters[6:9], T, F),
                              type = lty[get.cell.meta.data(name = "sector.numeric.index")], 
                              baseline = bl[get.current.sector.index()])
             })
                 
                 
circos.update(sector.index = "d", track.index = 1)
circos.lines(x = filter(df, df$fa == "d") %>% pull(x), 
             y = filter(df, df$fa == "d") %>% pull(y), 
             col = ifelse((filter(df, df$fa == "d") %>% pull(y)) > 0, "red", "green"), 
             type = "h")
circos.clear()


# example 2 --------------------------------------------------------------
circos.par(gap.degree = 0, track.margin = rep(0, 4), cell.padding = rep(0, 4), gap.after = 0)
circos.initialize(factors = "a", xlim = c(1, 100))
circos.track(factors = "a", ylim = c(-1, 1), 
             panel.fun = function(x, y){
                 circos.segments(
                     x0 = seq(1, 100, 2)[1:49], 
                     y0 = -1, 
                     x1 = seq(1, 100, 2)[2:50], 
                     y1 = 1,
                     col = "blue"
                 )
             })
circos.clear()


# example 3 -----------------------------------------------------------------
n = 1000
df <- data.frame(fa = sample(letters[1:8], n, T), 
                 x = rnorm(n), 
                 y = rnorm(n))

circos.par(track.height = 0.2)
circos.initialize(factors = df$fa, x = df$x)
circos.track(factors = df$fa, y = df$y, x = df$x, 
             panel.fun = function(x, y){
                 circos.points(x = x %>% quantile(probs = c(0.25, 0.75)), 
                               y = y %>% mean, 
                               col = "red", 
                               cex = 1, 
                               pch = 16)
                 
                 circos.text(x = x %>% quantile(probs = c(0.25, 0.75)), 
                             y = y %>% mean(), 
                             labels = c("rawTExt", "niceFacing"), 
                             facing = "clockwise", 
                             adj = c(0, 0))

             })

circos.track(factors = df$fa, x = df$x, y = df$y, 
             panel.fun = function(x, y){
                 circos.points(x = x %>% quantile(probs = c(0.25, 0.75)), 
                               y = y %>% mean(), 
                               col = "red", 
                               cex = 1, 
                               pch = 16)
                 
                 circos.text(x = x %>% quantile(probs = c(0.25, 0.75)), 
                             y = y %>% mean(), 
                             labels = c("rawText", "niceFacing"), 
                             adj = c(1, 0), 
                             facing = "clockwise")
             })

circos.clear()


# example 4 --------------------------------------------------
time <- c(8, 4, 2, 1)
names(time) <- c("G1", "S", "G2", "M")
cols <- RColorBrewer::brewer.pal(n = 4, name = "Set1")
names(cols) <- c("G1", "S", "G2", "M")

circos.par(start.degree = 90, track.height = 0.15, gap.after = 1, 
           canvas.xlim = c(-1.3, 1.3), canvas.ylim = c(-1.3, 1.3))
circos.initialize(factors = c("G1", "S", "G2", "M"), xlim = cbind(0, time))
circos.track(c("G1", "S", "G2", "M"), ylim = c(0, 1), x = time, 
             panel.fun = function(x, y){
                 circos.arrow(x1 = 0, 
                              x2 = x, 
                              y = 0.5, 
                              arrow.head.length = 0.25, 
                              arrow.head.width = 1.5, 
                              width = 1, 
                              col = cols[get.current.sector.index()])
                 
                 circos.text(x = CELL_META$xcenter, 
                             y = CELL_META$ycenter + uy(10, "mm"), 
                             labels = CELL_META$sector.index)
                 
                 circos.axis(h = "top", labels.cex = 0.6)
             }, bg.border = NA)

circos.clear()


# example 5 circos arrow plot ------------------------------------------------
cols <- RColorBrewer::brewer.pal(n = 4, name = "Set1")
t <- rep(c("normal", "point"), 2)

circos.par(start.degree = 90, track.height = 0.15)
circos.initialize(factors = letters[1:4], xlim = c(0, 1))
circos.track(factors = letters[1:4], ylim = c(0, 1), 
             panel.fun = function(x, y){
                 circos.arrow(x1 = 0, x2 = 1, y = CELL_META$ycenter, 
                              width = 1, 
                              arrow.head.length = 0.2, 
                              arrow.head.width = 1.3, 
                              tail = "point", 
                              col = cols[get.cell.meta.data("sector.numeric.index")])
                 
                 circos.axis()
             }, bg.border = NA)

# example 6 circos bar plot ---------------------------------------------------
degree <- round(runif(9, 40, 90), digits = 0)
od <- order(degree, decreasing = T)
degree <- degree[od]
lab <- paste("degree", degree, sep = "_") %>% paste("%", sep = "")
cols <- rainbow(n = 9)

circos.par(start.degree = 90, track.height = 0.1, gap.after = 0, 
           track.margin = rep(0, 4), cell.padding = rep(0, 4))
circos.initialize(factors = "a", xlim = c(0, 100))

for(i in 1:9){
    circos.track(factors = "a", ylim = c(0, 1), bg.border = NA, 
                 panel.fun = function(x, y){
        circos.segments(x0 = 0, 
                        y0 = 0.5, 
                        x1 = 100, 
                        y1 = 0.5, 
                        col = "grey", 
                        lty = 2)
        
        if(get.current.track.index() == 1){
            circos.axis(h = "top", labels.cex = 0.6, 
                        major.at = seq(0, degree[1] + 5, 5))
        }
        
        circos.rect(xleft = 0, 
                    ybottom = 0, 
                    xright = degree[i], 
                    ytop = 1,
                    col = cols[i], 
                    border = NA)
        
        circos.text(x = 0, 
                    y = 0.5, 
                    labels = lab[i], 
                    adj = c(1.2, 0), 
                    cex = 0.7, 
                    col = "black")
    })
}

circos.clear()

# example 7 -------------------------------------------------



