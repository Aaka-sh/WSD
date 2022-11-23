<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <table border="1px">
                    <tr style="background-color: teal; color: white;">
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>SALARY</th>
                        <th>EMAIL</th>
                        <th>MobNum</th>
                        <th>Designation</th>
                        <th>PROMOTION</th>
                    </tr>
                    <xsl:for-each select="company/employee">
                        <tr>
                            <td>
                                <xsl:value-of select="emp-name" />
                            </td>
                            <td>
                                <xsl:value-of select="emp-age" />
                            </td>
                            <td>
                                <xsl:value-of select="emp-salary" />
                            </td>
                            <td>
                                <xsl:value-of select="emp-emailid" />
                            </td>
                            <td>
                                <xsl:value-of select="emp-phonenum" />
                            </td>
                            <td>
                                <xsl:value-of select="emp-designation" />
                            </td>
                            <xsl:if test="emp-age &gt; 50">
                                <td>Associate Project Manager</td>
                            </xsl:if>
                            <xsl:if test="emp-age &gt; 40 and emp-age &lt; 50">
                                <td>Team Leader</td>
                            </xsl:if>
                            <xsl:if test="emp-age &lt; 40">
                                <td>Developer</td>
                            </xsl:if>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>